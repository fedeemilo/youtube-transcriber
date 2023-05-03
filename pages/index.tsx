import Head from 'next/head'
import { styled } from '../stitches.config'
import VideoForm from '../components/video-form'
import { Box } from '../components/box'
import { Output } from '../components/output'
import {
  TabsRoot,
  TabsList,
  TabsTrigger,
  TabsContent
} from '../components/tabs'
import { useState } from 'react'
import { extractVideoIdFromUrl, processVideo } from '../utils/api-client'

const Text = styled('p', {
  fontFamily: '$system',
  color: '$hiContrast'
})

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  marginY: 0,
  marginX: 'auto',
  paddingY: 0,
  paddingX: '$3',

  fontFamily: '$system',
  variants: {
    size: {
      1: {
        maxWidth: '300px'
      },
      2: {
        maxWidth: '585px'
      },
      3: {
        maxWidth: '865px'
      }
    }
  }
})

export default function Home() {
  const [isProcessing, setProcessing] = useState(false)
  const [progressOutput, setProgressOutput] = useState('')
  const [activeTab, setActiveTab] = useState('progress')
  const [resultTranscript, setResultTranscript] = useState('')

  const handleStartProcessing = async (videoUrl: string) => {
    const videoId = extractVideoIdFromUrl(videoUrl)
    console.log('videoId: ', videoId)

    if (typeof videoId === 'string') {
      setResultTranscript('')
      setProcessing(true)

      const transcriptInJapanese = await processVideo(videoId, message => {
        setProgressOutput(prev => prev + message)
      })

      if (transcriptInJapanese) {
        setResultTranscript(transcriptInJapanese)
      }

      setProcessing(false)
      setActiveTab('result')
    } else {
      alert('Invalid URL')
    }
  }

  return (
    <Box css={{ paddingY: '$6' }}>
      <Head>
        <title>Youtube Transcription</title>
      </Head>
      <Container size={{ '@initial': '2', '@bp1': '2' }}>
        <Text as="h1">Youtube Transcription</Text>
        <VideoForm
          onSubmit={handleStartProcessing}
          isProcessing={isProcessing}
        />
        <TabsRoot value={activeTab} onValueChange={setActiveTab}>
          <TabsList aria-label="Output">
            <TabsTrigger value="progress">Progress</TabsTrigger>
            <TabsTrigger value="result">Result</TabsTrigger>
          </TabsList>
          <TabsContent value="progress">
            <Output>{progressOutput}</Output>
          </TabsContent>
          <TabsContent value="result">
            <Output>{resultTranscript}</Output>
          </TabsContent>
        </TabsRoot>
      </Container>
    </Box>
  )
}
