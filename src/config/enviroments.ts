import dotenvFlow from 'dotenv-flow'
dotenvFlow.config()

export const PORT = parseInt(process.env.PORT || '3001', 10)
