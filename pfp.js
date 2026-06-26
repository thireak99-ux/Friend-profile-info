
// array object
const userProfileInfos = [
    {
        name: "Nen Makara",
        position: "Backend Developer",
        age: 18,
        profileImage: "./image/makara.png"
    },
    {
        name: "Nourv Sithikun",
        position: "Day Trader",
        age: 18,
        profileImage: "./image/kun.png"
    },
    {
        name: "Lun Koemtry",
        position: "Backend Developer",
        age: 18,
        profileImage: "./image/koemtry.png"
    },
    {
        name: "Lorm ChinaVathana",
        position: "Chairman of big company",
        age: 18,
        profileImage: "./image/vathana.png"
    },
    {
        name: "Hor Kimchheng",
        position: "Influencer",
        age: 18,
        profileImage: "./image/kimcheng.png"
    }
]

let userProfileCard="";
userProfileInfos.map((info)=>{

    userProfileCard = `
    <div style="border: 1px solid gray; padding: 10px; border-radius: 20px">
        
        <img src="${info.profileImage}" style="width:90px; height: 100px; border-radius: 50%;">
        
        <hr>
        <h1>Name: ${info.name}</h1>
        <h1>Age: ${info.age}</h1>
        <h1>Position: ${info.position}</h1>
    </div>
    `
    document.getElementById('userInfoDisplay').innerHTML += userProfileCard;
})
