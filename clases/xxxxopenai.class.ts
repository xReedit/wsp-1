import { config } from "../config"

export class OpenAiClass {
    openAiOptions = { model: 'gpt-3.5-turbo-0301', temperature: 0, apiKey: config.OPENAI_API_KEY }

    constructor(_options = { model: 'gpt-3.5-turbo-0301', temperature: 0, apiKey: config.OPENAI_API_KEY }) {
        if (!_options?.apiKey) {
            throw new Error('apiKey no pude ser vacio')
        }

        this.openAiOptions = { ...this.openAiOptions, ..._options }
    }

    /**
     *
     * @returns
     */
    buildHeader = () => {
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        headers.append('Authorization', `Bearer ${this.openAiOptions.apiKey}`)
        return headers
    }

    /**
     *
     * @param {*} input
     */
    sendEmbedding = async (input, model = 'text-embedding-ada-002') => {
        const headers = this.buildHeader()
        const raw = JSON.stringify({
            input,
            model,
        })

        const requestOptions = {
            method: 'POST',
            headers: headers,
            body: raw,
            redirect: 'follow',
        }

        const response = await fetch('https://api.openai.com/v1/embeddings', {
            method: 'POST',
            headers: headers,
            body: raw,
            redirect: 'follow',
        })
        return response.json()
    }

    /**
     *
     * @param {*} messages
     * @returns
     */
    sendChat = async (messages = []) => {
        const headers = this.buildHeader()

        const raw = JSON.stringify({
            model: this.openAiOptions.model,
            temperature: this.openAiOptions.temperature,
            messages,
        })

        const requestOptions = {
            method: 'POST',
            headers,
            body: raw,
            redirect: 'follow',
        }

        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers,
            body: raw,
            redirect: 'follow',
        })
        return response.json()
    }
    /**
     *
     * @param {*} prompt
     * @returns
     */
    sendCompletions = async (prompt = undefined) => {
        const headers = this.buildHeader()

        const raw = JSON.stringify({
            model: this.openAiOptions.model,
            temperature: this.openAiOptions.temperature,
            prompt
        })

        const requestOptions = {
            method: 'POST',
            headers,
            body: raw,
            redirect: 'follow',
        }

        const response = await fetch('https://api.openai.com/v1/completions', {
            method: 'POST',
            headers,
            body: raw,
            redirect: 'follow',
        })
        return response.json()
    }
}