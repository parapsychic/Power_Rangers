import "../styles/Compose.css"

export default function Compose() {
    return (
        <>
            <div id="compose-parent">
                <textarea name="compose" id="compose" rows="10"></textarea>
                <div id="compose-media">
                    <button className="btn"><i className="fa-paperclip"></i></button>
                    <button className="btn">Post <i className="fa-paper-plane"></i></button>
                </div>
            </div>
        </>
    )
}
