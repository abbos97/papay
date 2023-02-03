// ====================  M-task   ==================

class Member {
    
    constructor(counts) {
      this.counts = counts;
    }
    addMember(m) {
      this.counts += m;
    }
    removeMember(m) {
      this.counts -= m;
    }
    inform() {
      return `Memberlar soni ${this.counts}`
    }
}

const member1 = new Member(0);
member1.addMember(3)
member1.removeMember(1)
console.log(member1.inform())




// //================ L-task ============

// function calc(num) {
//     return eval(num)
//  }
//  console.log(calc("1+1"))
 

 
// // ============= K-task ==================


// // function footBallPoints(w,d,l) {
// //     let wins = 3,draws = 1,losses = 0;
// //      return w + d + l + wins + draws + losses
// // }

// // console.log(footBallPoints(3,4,2))
