import style from "../css/modules/MyFormData.module.css";
import { useState } from "react";


export default function MyFormData() {

    const initialFormData = {
        title_post: "",
        content_post: ""
    }

    const [postsList, setPostsList] = useState([]);

    const [formData, setFormData] = useState({ initialFormData })

    function updateFormData(newValue, fieldName) {

        setFormData({
            ...formData,
            [fieldName]: newValue,
        })

    }

    function handleFormSubmit(e) {
        // evito il refresh della pagina
        e.preventDefault();

        // aggiungo il nuovo post alla lista postsList e aggiorno lo state
        setPostsList([...postsList, formData]);

        // resetto il form per svuotare i campi input
        setFormData({ initialFormData });
    }

    return (
        <div className={"container"}>
            <h1 className="text-center">INSERISCI I DATI DEL NUOVO POST</h1>

            <form onSubmit={handleFormSubmit}>

                <div className="mb-3">
                    <label htmlFor="titlePost" className="form-label"><strong>Titolo:</strong></label>
                    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Inserisci qui il titolo del post" name="title_post" value={formData.title_post}
                        onChange={(e) => updateFormData(e.target.value, "title_post")}></input>

                    <label htmlFor="contentPost" className="form-label"><strong>Contenuto:</strong></label>
                    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Inserisci qui il contenuto del post" name="content_post" value={formData.content_post}
                        onChange={(e) => updateFormData(e.target.value, "content_post")}></input>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            <div className="row justify-content-center py-5">
                {postsList.map((post) => (
                    <div className="col-5 mx-2 my-2 card">
                        <h3>{post.title_post}</h3>
                        <p>{post.content_post}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
