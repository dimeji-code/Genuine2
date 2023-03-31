export type Question = {
    name:string,
    question:string,
    answer:string[]
}
const QUESTION_LIST:Question[] = [
    {name: "personality-type",
     question:   "What is the persons personality type?",
     answer:   ["introvert", "extrovert"]
    },
    {name: "interest",
     question:   "What interest is the person leaning towards the most?",
     answer:   ["music", "fashion","athletics","technology","aesthetic"]
    },
    {name: "time",
     question:   "How often do you see the person?",
     answer:   ["everyday", "weekly","not often"]
    },
    {name: "age",
     question:   "What is the age range of the recepient?",
     answer:   ["< 10", "10-14","15-20","21-35","> 35"]
    },
    {name: "budget",
     question:   "What is your budget for a gift?",
     answer:   ["30", "60","200","500","2000"]
    },

]

export default QUESTION_LIST