



const friendConverter = {
    friendEntry (obj) {
        const friendHTMLRepresentation = 
        `
        <div id="friend__${obj.id}" class="singleFriend">
            <div class="friend__userDetails">
                <img class="friend__userImage" src="/images/userIcon.png">
                <div class="friend__name">
                    ${obj.userId}
                </div>
            </div>
            <div class="friendsList__deleteBtn">
                <button id="deleteFriend__${obj.id}" class="deleteBtn" type="button">&times;</button>
            </div>
        </div>
        `
        return friendHTMLRepresentation
    }
}

export default friendConverter;