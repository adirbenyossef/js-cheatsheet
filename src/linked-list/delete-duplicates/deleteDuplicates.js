function deleteDuplicates(head) {
    let i = 0;
    let current = head[i];

    while (current && head[i + 1]) {
        if (current === head[i + 1]) {
            current = head[i + 2];
            head.splice(i + 1, 1);
        } else {
            current = head[i + 1];
        }
    }

    return head;
}


console.log(deleteDuplicates([1,1,2,3,3]));