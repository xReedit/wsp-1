const fs = require("fs");
import { Configuration, OpenAIApi } from "openai";
import { config } from "../config";

/**
 *
 * @param {*} path url mp3
 */
export const voiceToText = async (path) => {
    if (!fs.existsSync(path)) {
        throw new Error("No se encuentra el archivo");
    }

    try {
        const configuration = new Configuration({
            apiKey: config.OPENAI_API_KEY,
        });
        const openai = new OpenAIApi(configuration);
        const resp = await openai.createTranscription(
            fs.createReadStream(path),
            "whisper-1"
        );

        return resp.data.text;
    } catch (err) {
        console.log(err.response.data)
        return "ERROR";
    }
};