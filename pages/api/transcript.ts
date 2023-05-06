import type { NextApiRequest, NextApiResponse } from 'next'
import { spawn } from 'child_process'
import path from 'path'
import { transferChildProcessOutput } from '../../utils/shell'

const ENV = process.env as any

export default function GET(
    request: NextApiRequest,
    response: NextApiResponse
) {
    const video_id = request.query.video_id as string
    if (typeof video_id !== 'string') {
        response.status(400).json({ error: 'Invalid request' })
        return
    }

    console.log('Video ID:', video_id)

    // Obtener la ruta completa del intérprete de Python desde la variable de entorno PATH
    const pythonPath = ENV.PATH.split(path.delimiter).find((path: any) =>
        path.endsWith('/python')
    )

    if (!pythonPath) {
        console.error('No se encontró la ruta del intérprete de Python')
        response.status(500).json({ error: 'Internal server error' })
        return
    }

    // Utilizar la variable `pythonPath` en tu código
    console.log(`Ruta de Python: ${pythonPath}`)
    // ...resto de tu código utilizando `pythonPath`...

    const cmd = spawn(pythonPath, [
        path.join(process.cwd(), 'scripts/transcribe.py'),
        video_id || ''
    ])

    transferChildProcessOutput(cmd, response)
}
