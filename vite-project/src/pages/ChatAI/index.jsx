import OpenAI from "openai"
import { useState } from "react"
import {ColorRing} from "react-loader-spinner"
import "./ChatAI.css"
import Navbar from "../../components/Navbar/Index"
import Footer from "../../components/Footer"


const ChatAI = () => {
    const [command, setCommand] = useState('') // state input user
    const [loading, setLoading] = useState(false) // state loader nunggu resposn
    const [result, setResult] = useState([]) // menyimpan respone
    const [image, setImage] = useState("");

    const openai =  new OpenAI({
        apiKey: "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",
        // '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'
        // apiKey: process.env.OPEN_AI_KEY,
        dangerouslyAllowBrowser: true
    });

    const handleSubmit = async (e) =>{
        e.preventDefault()
        setLoading(true)
        const res = await openai.chat.completions.create({
            messages: [{ role: "system", content: command}],
            model: "gpt-3.5-turbo",
            //max_tokens: 7,
            // temperature: 0,
            // presence_penalty: 0.0,
            // frequency_penalty: 0.0,
            // top_p: 1.0
        })
        setResult(res.choices)
        console.log('result ', res);
        setLoading(false)
    }

    const handleGenerateImage = async (e) => {
        e.preventDefault();
        setLoading(true)
        const img = await openai.images.generate({ prompt: command });
        console.log(img.data[0].url)
        setImage(img.data[0].url);
        // console.log(result)
        setLoading(false)
      };
    

    // const handleSubmit = async (e) =>{
    //     e.preventDefault()

    //     setLoading(true)
    //     const res = await openai.completions.create({
    //         // prompt: command,
    //         prompt : "A summarizing article from this url : " + command,
    //         model: 'text-davinci-003',
    //         // message: [{ role: "system", content: command}],
    //         // model: "gpt-3.5-turbo",
    //         max_tokens: 7,
    //         temperature: 0,
    //         presence_penalty: 0.0,
    //         frequency_penalty: 0.0,
    //         top_p: 1.0
    //     })
    //     setResult(res.choices[0].message.content)
    //     console.log('result ', res);
    //     setLoading(false)
    // }
    

    return(
        <section className="ChatAIContent">
            <Navbar />
                <div id="kotakChatAI">
                    <div id="kotak-content">
                        <div id="kotak-title">
                            <h4>Tanyakan Apa Saja Seputar Loundry Sepatu</h4>
                        </div>
                        <table align="center">
                            <label>
                                    <div class="form-floating">
                                    <textarea className="form-control" placeholder="Leave a comment here" id="command" name="command" value={command}
                                    onChange={(e) => setCommand(e.target.value)}
                                    style={{ width: "600px", height: "100px" }}>
                                    </textarea>
                                    <label for="floatingTextarea">ChatAI</label>
                                    <br></br>
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        onClick={(e) => handleSubmit(e)}
                                        >
                                        Submit
                                    </button>

                                    <button type="submit" className="btn btn-warning" onClick={(e) => handleGenerateImage(e)}>
                                    Generate Image
                                    </button>
                                    {
                                        loading ? (
                                            <ColorRing
                                            visible={true}
                                            height="80"
                                            width="80"
                                            ariaLabel="blocks-loading"
                                            wrapperStyle={{}}
                                            wrapperClass="blocks-wrapper"
                                            colors={['#e15b64', '#f476e60', '#f8b26a', '#abbd81', '#849b87']}
                                            /> 
                                            ) : (
                                                <div>
                                                    {result.length > 0 ? result?.map((item, index) => (
                                                        <div key={index}>
                                                            <p>{item.message.content}</p>
                                                        </div>
                                                    )) : <div></div>}
                                                    <img src={image} width={250} alt="" />
                                                </div>
                                            )
                                    }

                                    </div>
                                    
                            </label>
                        </table>
                    </div>
                </div>
        <Footer />
        </section>
    )
}

export default ChatAI