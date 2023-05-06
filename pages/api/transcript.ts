import type { NextApiRequest, NextApiResponse } from 'next'
import { spawn, execSync } from 'child_process'
import path from 'path'
import { transferChildProcessOutput } from '../../utils/shell'

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

    // Obtener la ruta completa del intérprete de Python
    const pythonPath = execSync('which python').toString().trim()

    // Utilizar la variable `pythonPath` en tu código
    console.log(`Ruta de Python: ${pythonPath}`)
    // ...resto de tu código utilizando `pythonPath`...

    const cmd = spawn('python', [
        path.join(process.cwd(), 'scripts/transcribe.py'),
        video_id || ''
    ])

    transferChildProcessOutput(cmd, response)
}
