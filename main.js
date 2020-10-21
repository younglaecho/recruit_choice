function applicant(number, name, score, firstChoice, secondChoice) {
  this.number = number;
  this.name = name;
  this.score = score;
  this.choice = [firstChoice, secondChoice];
}

const applicant1 = new applicant(1, 'Cho', 900, 'Seoul', 'Daejun');
const applicant2 = new applicant(2, 'Yang', 920, 'Seoul', 'Gwangju');
const applicant3 = new applicant(3, 'God', 820, 'Daejun', 'Gwangju');
const applicant4 = new applicant(4, 'Kim', 950, 'Seoul', 'Gwangju');
const applicant5 = new applicant(5, 'Jung', 890, 'Seoul', 'Goomi');
const applicant6 = new applicant(6, 'Lim', 700, 'Goomi', 'Seoul');
const applicant7 = new applicant(7, 'Hoon', 760, 'Gwangju', 'Goomi');
const applicant8 = new applicant(8, 'Chun', 690, 'Daejun', 'Goomi');
const applicant9 = new applicant(9, 'Park', 930, 'Seoul', 'Daejun');
const applicant10 = new applicant(10, 'Noh', 955, 'Gwangju', 'Goomi');
const applicant11 = new applicant(11, 'chong', 800, 'Seoul', 'Goomi');

let applicants = [applicant1, applicant2, applicant3, applicant4, applicant5, applicant6, applicant7, applicant8, applicant9, applicant10, applicant11];

function Applylist(localapplicant, priority) {
  this.localapplicant = localapplicant;
  this.priority = priority;
}

let SeoulApplylist = [];
let GwangjuApplylist = [];
let DaejunApplylist = [];
let GoomiApplylist = [];

for(let i = 0; i < applicants.length ; i++) {
  if (applicants[i].choice.includes('Seoul')){
    let appriority = new Applylist(applicants[i], applicants[i].choice.indexOf('Seoul'));
    SeoulApplylist.push(appriority);
  }
  if (applicants[i].choice.includes('Daejun')) {
    let appriority = new Applylist(applicants[i], applicants[i].choice.indexOf('Daejun'));
    DaejunApplylist.push(appriority);
  }
  if (applicants[i].choice.includes('Gwangju')) {
    let appriority = new Applylist(applicants[i], applicants[i].choice.indexOf('Gwangju'));
    GwangjuApplylist.push(appriority);
  }
  if (applicants[i].choice.includes('Goomi')) {
    let appriority = new Applylist(applicants[i], applicants[i].choice.indexOf('Goomi'));
    GoomiApplylist.push(appriority);
  }
}

let applisting = (Applylist) => {
  Applylist.sort((a, b) => {
    return b.localapplicant.score - a.localapplicant.score;
  });
} 


applisting(SeoulApplylist);
applisting(DaejunApplylist);
applisting(GwangjuApplylist);
applisting(GoomiApplylist);


SeoulSuccess = [];
DaejunSuccess = [];
GwangjuSuccess = [];
GoomiSuccess = [];
//각 지역에서 2명씩 뽑을 것이다.

function Sucdel(Applylist, Successer) {
  let sucNum = Applylist.findIndex(k => k.localapplicant.number == Successer.number);
  if (sucNum != -1) {
    Applylist.splice(sucNum, 1);
  }    
}
function dis(Applylist, Success, i, j) {
  if(Success.length != 2){
    if(Applylist[j].priority == i) {
      let Successer = Applylist[j].localapplicant;
      Success.push(Successer);
      Applylist.splice(j, 1);
      
      Sucdel(GwangjuApplylist,Successer);
      Sucdel(DaejunApplylist,Successer);
      Sucdel(GoomiApplylist,Successer);
      Sucdel(SeoulApplylist,Successer);
    }
  }
}
for(let i = 0 ; i < 2 ; i++) {
  for(let j = 1 ; j > -1 ; j--) {
    dis(SeoulApplylist,SeoulSuccess,i,j)
    dis(GwangjuApplylist,GwangjuSuccess,i,j)
    dis(DaejunApplylist,DaejunSuccess,i,j)
    dis(GoomiApplylist,GoomiSuccess,i,j)
  } 
}
//console.log(SeoulSuccess)
//console.log(DaejunSuccess)
//console.log(GwangjuSuccess)
//console.log(GoomiSuccess)