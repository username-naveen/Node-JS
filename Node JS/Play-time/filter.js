const tasks = {
    tasks: [{
        text: 'grocery',
        completed: true
    },
    {
        text: 'cleaning',
        completed: false
    },
    {
        text: 'filming',
        completed: false
    }],
    // getTasksToDo() {
    //     const toDo = this.tasks.filter( (tasks) => {
    //         return tasks.completed === false         
    //     })
    //     return toDo
    // }}

    //also can be written as

    getTasksToDo() {
        return this.tasks.filter((tasks) => tasks.completed === false)
    }}

console.log(tasks.getTasksToDo())