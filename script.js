var input = document.querySelector('.input');
const container = document.querySelector('.container');


class item{
    constructor(additem){
        this.creatediv(additem);
    }

    creatediv(additem){
        let item_input= document.createElement('input');
        item_input.value=additem;
        item_input.disabled=true;
        item_input.classList.add('item_input');
        item_input.type="text"


        let item_Div = document.createElement('div');
         item_Div.classList.add('item');


        let editbtn = document.createElement('button');
        editbtn.innerHTML='Edit';
        editbtn.classList.add('edit_btn');

        let removebtn = document.createElement('button');
        removebtn.innerHTML='Remove';
        removebtn.classList.add('remove_btn');


        container.appendChild(item_Div);
        item_Div.appendChild(item_input);
        item_Div.appendChild(editbtn);
        item_Div.appendChild(removebtn);

        editbtn.addEventListener('click', ()=> this.edit_item(item_input));
        removebtn.addEventListener('click', ()=> this.remove_item(item_Div));


    }


    edit_item(item_input){
        item_input.disabled=!item_input.disabled;
    }

    remove_item(item_Div){
     container.removeChild(item_Div);
    }

}

function add_item(){
    if(input.value!="")
    {
        new item(input.value);

        input.value="";
    }
}

window.addEventListener('keydown', (e) => {
    if(e.which==13)
    {
        add_item();
    }
})