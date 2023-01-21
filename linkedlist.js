function Node(value) {
  return {
    value: value,
    next: null,
  };
}

function LinkedList() {
  let head;
  return {
    append: function (value) {
      let current = head;
      if (head == null) {
        head = Node(value);
        head.value = value;
        return;
      }
      if (head.next == null) {
        head.next = Node(value);
      } else {
        while (current.next != null) {
          current = current.next;
        }
        current.next = Node(value);
      }
    },
    prepend: function (value) {
      let newHead = Node(value);
      newHead.next = head;
      head = newHead;
    },
    size: function () {
      let count = 1;
      let current = head;
      while (current.next != null) {
        current = current.next;
        count++;
      }
      return count++;
    },
    head: function () {
      return head;
    },
    tail: function () {
      let current = head;
      while (current.next != null) {
        current = current.next;
      }
      return current;
    },
    at: function (index) {
      let count = 1;
      if (count == index) {
        return head;
      } else {
        let current = head;
        while (current.next != null) {
          current = current.next;
          count++;
          if (count == index) {
            return current;
          }
        }
      }
    },
    pop: function () {
      let current = head;
      while (current.next.next != null) {
        current = current.next;
      }
      if (current.next != null) {
        current.next = null;
      } else {
        return "cannot remove head";
      }
    },
    contains: function (value) {
      let current = head;
      if (current.value == value) {
        return true;
      } else {
        while (current.next != null) {
          current = current.next;
          if (current.value == value) {
            return true;
          }
        }

        return false;
      }
    },
    find: function (value) {
      let count = 1;
      if (value == head.value) {
        return 1;
      } else {
        let current = head;
        while (current.next != null) {
          current = current.next;
          count++;
          if (value == current.value) {
            return count;
          }
        }
      }
    },
    insertAt: function (value, index) {
      let count = 1;
      let current = head;
      if (index == 1) {
        return;
      } else if (index == 2) {
        let newValue = Node(value);
        newValue.next = current.next;
        current.next = newValue;
      } else {
        while (current.next != null) {
          current = current.next;
          count++;
          if (count + 1 == index) {
            let newValue = Node(value);
            newValue.next = current.next;
            current.next = newValue;
          }
        }
      }
    },
    toString: function () {
      let current = head;
      let text = {
        print: `(${current.value}) -> `,
      };

      while (current.next != null) {
        current = current.next;
        text.print += `(${current.value}) -> `;
      }

      console.log((text.print += "null"));
    },
    removeAt: function (index) {
      let count = 1;
      let current = head;
      if (index == 1) {
      } else if (index == 2) {
        let temp = current.next.next;
        current.next = temp;
      } else {
        while (current.next != null) {
          current = current.next;
          count++;
          if (count + 1 == index) {
            let temp = current.next.next;
            current.next = temp;
          }
        }
      }
    },
  };
}
