class Queue {

  constructor() {
    this.busy = false;
    this.tasks = [];
  }

  push(taskFunction) {
    return new Promise((resolve) => {
      this.tasks.push({
        taskFunction,
        resolve
      });
      this.next();
    });
  }

  next () {
    //if the queue is busy or if there are no tasks to process, returns immediately.
    if (this.isBusy || this.tasks.length === 0) {
      return;
    }

    //Marks the queue as busy and removes the next task from the queue.
    this.isBusy = true;
    let currTask = this.tasks.shift();

    //Executes the task and waits for it to complete.
    return currTask.taskFunction().then((data) => {
      //resolves the task's promise with the result data, marks the queue as not busy, and then calls itself to process the next task in the queue.
      currTask.resolve(data);
      this.isBusy = false;
      this.next();
    });
  }
}

export default Queue;