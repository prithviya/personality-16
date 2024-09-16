const firebaseConfig = {
    apiKey: "AIzaSyAoC-FUJk-jDAvVuQ4DOlOrLBzZJgFurJI",
    authDomain: "personality-checker-b4a21.firebaseapp.com",
    projectId: "personality-checker-b4a21",
    storageBucket: "personality-checker-b4a21.appspot.com",
    messagingSenderId: "145465583705",
    appId: "1:145465583705:web:f998a83aa920a086e72948"
  };

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

var cur_grp =0
var cur_ind=0
var arr=[2,1,2,0,0]
const pers = [
    ["I","E"],
    ["S","N"],
    ["T","F"],
    ["P","J"],
    ["-T", "-A"]
]
const mulp = [-1,
    1,
    -1,
    -1,
    -1,
    1,
    -1,
    -1,
    -1,
    1,
    -1,
    1,
    -1,
    1,
    -1,
    -1,
    -1,
    -1,
    -1,
    1,
    1,
    1,
    1,
    -1,
    1,
    1,
    1,
    1,
    1,
    -1,
    -1,
    1,
    -1,
    1,
    -1,
    -1,
    -1,
    1,
    -1,
    -1,
    1,
    -1,
    -1,
    -1,
    1,
    1,
    1,
    -1,
    1,
    1,
    1,
    1,
    -1,
    -1,
    1,
    -1,
    -1,
    -1,
    1,
    -1]

const index = [0
    ,1
    ,2
    ,3
    ,4
    ,0
    ,3
    ,2
    ,3
    ,4
    ,0
    ,1
    ,2
    ,3
    ,4
    ,0
    ,1
    ,2
    ,1
    ,4
    ,0
    ,1
    ,2
    ,3
    ,2
    ,0
    ,4
    ,2
    ,3
    ,1
    ,0
    ,1
    ,2
    ,3
    ,4
    ,0
    ,1
    ,2
    ,3
    ,4
    ,0
    ,1
    ,0
    ,3
    ,4
    ,1
    ,4
    ,2
    ,3
    ,4
    ,0
    ,1
    ,0
    ,2
    ,4
    ,3
    ,1
    ,2
    ,3
    ,4
    ]

const questions = [
"1. You regularly make new friends.",

"2. Complex and novel ideas excite you more than simple and straightforward ones.",

"3. You usually feel more persuaded by what resonates emotionally with you than by factual arguments.",

"4. Your living and working spaces are clean and organized.",

"5. You usually stay calm, even under a lot of pressure.",

"6. You find the idea of networking or promoting yourself to strangers very daunting.",

"7. You prioritize and plan tasks effectively, often completing them well before the deadline.",

"8. People's stories and emotions speak louder to you than numbers or data.",

"9. You like to use organizing tools like schedules and lists.",

"10. Even a small mistake can cause you to doubt your overall abilities and knowledge.",

"11. You feel comfortable just walking up to someone you find interesting and striking up a conversation.",

"12. You are not too interested in discussions about various interpretations of creative works.",

"13. You prioritize facts over people's feelings when determining a course of action.",

"14. You often allow the day to unfold without any schedule at all.",

"15. You rarely worry about whether you make a good impression on people you meet.",

"16. You enjoy participating in team-based activities.",

"17. You enjoy experimenting with new and untested approaches.",

"18. You prioritize being sensitive over being completely honest.",

"19. You actively seek out new experiences and knowledge areas to explore.",

"20. You are prone to worrying that things will take a turn for the worse.",

"21. You enjoy solitary hobbies or activities more than group ones.",

"22. You cannot imagine yourself writing fictional stories for a living.",

"23. You favor efficiency in decisions, even if it means disregarding some emotional aspects.",

"24. You prefer to do your chores before allowing yourself to relax.",

"25. In disagreements, you prioritize proving your point over preserving the feelings of others.",

"26. You usually wait for others to introduce themselves first at social gatherings.",

"27. Your mood can change very quickly.",

"28. You are not easily swayed by emotional arguments.",

"29. You often end up doing things at the last possible moment.",

"30. You enjoy debating ethical dilemmas.",

"31. You usually prefer to be around others rather than on your own.",

"32. You become bored or lose interest when the discussion gets highly theoretical.",

"33. When facts and feelings conflict, you usually find yourself following your heart.",

"34. You find it challenging to maintain a consistent work or study schedule.",

"35. You rarely second-guess the choices that you have made.",

"36. Your friends would describe you as lively and outgoing.",

"37. You are drawn to various forms of creative expression, such as writing.",

"38. You usually base your choices on objective facts rather than emotional impressions.",

"39. You like to have a to-do list for each day.",

"40. You rarely feel insecure.",

"41. You avoid making phone calls.",

"42. You enjoy exploring unfamiliar ideas and viewpoints.",

"43. You can easily connect with people you have just met.",

"44. If your plans are interrupted, your top priority is to get back on track as soon as possible.",

"45. You are still bothered by mistakes that you made a long time ago.",

"46. You are not too interested in discussing theories on what the world could look like in the future.",

"47. Your emotions control you more than you control them.",

"48. When making decisions, you focus more on how the affected people might feel than on what is most logical or efficient.",

"49. Your personal work style is closer to spontaneous bursts of energy than organized and consistent efforts.",

"50. When someone thinks highly of you, you wonder how long it will take them to feel disappointed in you.",

"51. You would love a job that requires you to work alone most of the time.",

"52. You believe that pondering abstract philosophical questions is a waste of time.",

"53. You feel more drawn to busy, bustling atmospheres than to quiet, intimate places.",

"54. If a decision feels right to you, you often act on it without needing further proof.",

"55. You often feel overwhelmed.",

"56. You complete things methodically without skipping over any steps.",

"57. You prefer tasks that require you to come up with creative solutions rather than follow concrete steps.",
       
"58. You are more likely to rely on emotional intuition than logical reasoning when making a choice.",

"59. You struggle with deadlines.",

"60. You feel confident that things will work out for you."

]

// for(let i=0;i<5;i++){
//     let p=0,n=0,t=0
//     for(let j=0;j<60;j++){
//         if(index[j] == i){
//             if(mulp[j]== -1,){
//                 n++
//             }
//             else{
//                 p++
//             }
//             t++
//         }
//     }
//     console.log(i,":","-1, : ",n," 1, : ",p," Total : ",t)
// }

for(let i=0;i<60;i++){
    console.log(i,": ",pers[index[i]][mulp[i]>0? 0 : 1])
}


const ques_containers= document.querySelectorAll("div.ques > h3")
const inputs = document.querySelectorAll("input[type=radio]")
console.log(ques_containers)

add_ques()


const form = document.getElementById("data-form");
console.log(form)
form.addEventListener("submit", (e) => {
    if(cur_grp==60){
        let btn = document.getElementById("next")
        btn.textContent= "Submit"
        
    }
    if(cur_grp==60){
        for(let i=0;i<5;i++){
            console.log(i,":",(arr[i]))
        }
        let res=typeGen()
        console.log(res);
        updateResult(res);
       
        users['type'] = res;
        for (let i=0; i<5; i++)
            users[i.toString()] = arr[0];
        // location.replace("result.html")
    }
    e.preventDefault();
    const myFormData = new FormData(e.target);
    const formDataObj = Object.fromEntries(myFormData.entries());
    console.log(formDataObj)
    update_score(formDataObj) 
    add_ques()
    
    
    inputs.forEach((e)=>{
        if (e.value == "0"){
            e.checked = true
            return
        }
        e.checked = false
    })
})

function add_ques(){
    ques_containers.forEach((e) => {
        e.textContent = questions[cur_grp+cur_ind]
        cur_ind++ 
    })  
    cur_ind=0
    cur_grp+=10  
}

function update_score(formDataObj){
    for(let i=0;i<6;i++){
        let ind = cur_grp+i
        let ans = formDataObj[("answer"+(i+1))] - '0'
        arr[index[ind]] += (ans)*mulp[ind] 
    }
    console.log(cur_grp)
    console.log(arr)
}

function typeGen(){
    let res=""
    for(let i=0;i<5;i++){
        res= res+pers[i][(arr[i]>=0)?0:1]
    }
    return res
}



async function  updateResult(result)
{
    try {
        
            var storedObject = localStorage.getItem("myObject");
            var obj = JSON.parse(storedObject);
            let id = obj.id;
            console.log(id);
            await updateUserResultInFirestore(id,result);
            console.log("success!");
        
        
      } catch (error) {
        console.error("Error updating user result:", error);

      }
   }


async function updateUserResultInFirestore(userId, newResult) {
    try {
        const usersRef = db.collection("users");
       
        const userDocRef = usersRef.doc(userId);

        
        await userDocRef.update({ result: newResult });

        localStorage.removeItem('myObject')

        console.log("User result updated successfully.");
    } catch (error) {
        console.error("Error updating user result in Firestore:", error);
        throw error;
    }
  }

