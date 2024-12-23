function capitalWordka(str) {
    return str.charAt(0).toUpperCase() +str.slice(1).toLowerCase();
  }
function one() {
   var getInp = document.getElementById('inps');
var getValue1 = capitalWordka(getInp.value)
  getUl = document.getElementById('uls');
 var creatLi = document.createElement('li');
 creatLi.textContent = getValue1;
 creatLi.className = 'abc';
 getUl.appendChild(creatLi);
 //var deltbutn = document.createElement('button')
 //deltbutn.textContent = 'Edit'
 //deltbutn.setAttribute('onclick','delt(this)')
// creatLi.appendChild(deltbutn)
 getInp.value = '';
}
//function delt(data){
  //data.parentNode.remove()
//}
function two() {
    var getInput = document.getElementById('inpes');
var getValue2 = capitalWordka(getInput.value)

  getlist = document.getElementById('ules');
 var textli = document.createElement('li');
 textli.textContent = getValue2;
 textli.className = 'def';
 getlist.appendChild(textli);
  getInput.value = '';
}
function matchTeams() {
  var groupA = document.getElementById('uls');
  var groupB = document.getElementById('ules');

    var teamA = Array.from(groupA.children).filter(li => !li.classList.contains ('matched'));
    var teamB = Array.from(groupB.children).filter(li => !li.classList.contains('matched'));

    if (teamA.length > 0 && teamB.length > 0) {
      var teamAKaKaam = Math.floor(Math.random() * teamA.length);
      var teamBKaKaam = Math.floor(Math.random() * teamB.length);

      var teamsA = teamA[teamAKaKaam];
      var teamsB = teamB[teamBKaKaam];

      document.getElementById('pehliTeam').textContent = teamsA.firstChild.textContent;
      document.getElementById('dusriTeam').textContent = teamsB.firstChild.textContent;

      teamsA.classList.add('matched');
      teamsB.classList.add('matched');
    } else {
      alert('Teams Khatam Hogyee Dono Group My Match ky Lyee 1/1 Team Hona Zaroori hy');
    }
  }