function addLi()
{

    var txtVal = document.getElementById('txtVal').value,
        listNode = document.getElementById('list'),
        liNode = document.createElement("LI"),
        txtNode = document.createTextNode(txtVal);

     liNode.appendChild(txtNode);
     listNode.appendChild(liNode);

}

const Profile = () => {
    return (
        <div className="text-center">
            <h1 className="heading">Profile</h1>
            <div>
                <div className="about">
                Placeholder text
                </div>
                <div class="flex bg-gray-400 profile">
                    <div class="flex-1 text-gray-800 text-center bg-gray-400 px-4 py-2 m-2">
                        Skills 

                    </div>
                    <div class="flex-1 text-gray-800 text-center bg-gray-500 px-4 py-2 m-2">
                        Item that cannot grow or shrink
                    </div>
                    <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                        Item that can grow or shrink if needed
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;