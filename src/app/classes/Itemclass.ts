export class Items {
    id: number;
    name: string;
    checked: boolean;
  
    constructor(id: number, name: string, checked: boolean) {
      // Assign provided values to class properties
      this.id = id;
      this.name = name;
      this.checked = checked;
    }
  }
  