

const eventConverter = {
    eventEntry (obj) {
        const eventHTMLRepresentation = 
        `
        <div id="event__${obj.id}" class="singleEvent">
            <div class="event__header">
                <div class="event__name">
                <h4>${obj.title}</h4>
                    <button id="deleteEvent__${obj.id}" class="deleteBtn" type="button">&times;</button>
                </div>    
            </div>
        <div class="event__details">
            <dl>
                <dt>HOST</dt>
                    <dd>${obj.user.userId}</dd>
                <dt>WHEN</dt>
                    <dd>${obj.date}</dd>
                <dt>WHERE</dt>
                    <dd>${obj.location}</dd>
            </dl>
            </div>
        </div>
        `
        return eventHTMLRepresentation
    }
}

export default eventConverter;