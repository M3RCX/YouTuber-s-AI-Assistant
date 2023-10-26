import {fastify} from 'fastify'
import { fastifyCors } from '@fastify/cors'
import { prisma } from './lib/prisma'
import { listPromptsRoutes } from './routes/get-all-propts'
import { uploadVideoRoutes } from './routes/upload-video'
import { createTranscriptionRoutes } from './routes/create-transcription'
import { generateAiComplete } from './routes/generate-ai-completion'

const app = fastify()

app.register(fastifyCors, {
    origin: '*'

})

app.register(listPromptsRoutes)
app.register(uploadVideoRoutes)
app.register(createTranscriptionRoutes)
app.register(generateAiComplete)




app.listen({
    port:3333,
}).then(()=>{
    console.log('Server is running!')
})