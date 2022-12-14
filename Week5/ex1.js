
let order = [{ //สร้างตัวแปรเก็บข้อมูล เอาArryเข้ามาช่วยในการเก็บข้อมูล
    "Customer": "Mr.lee",
    "ItemOrder": ["A4 Paper", "Ruler"],
    "Qty": [5, 2],
    "Price": [120, 25]
}, {
}, 
    { //ออฟเจ็กใหม่
    "Customer": "Mr.Yue",
    "ItemOrder": ["Flash Drive", "A4 Paper"],
    "Qty": [2, 3],
    "Price": [130, 120]
}, {
    "Customer": "Ms. fah",
}, 
    {
    "Customer": "Miss pam",
    "ItemOrder": ["Flash Drive", "VGA card", "SSD"],
    "Qty": [2, 3, 1],
    "Price": [130, 300, 250]
}]
for ( i = 0; i < order.length; i++) {
    let sum = 0;
    for (let j = 0; j < order[i].ItemOrder.length; j++) {
        sum += order[i].Qty[j] * order[i].Price[j];
    }
}
    console.log(order[i].Customer, sum);
for ( i = 0; i < order.length; i++) {
    let sum = 0; //ประกาศsumเก็บค่าตัวแปรและผลรวม

    for (let j = 0; j < order[i].ItemOrder.length; j++) {
        sum += order[i].Qty[j] * order[i].Price[j];  //เอามาคูณกันแล้ว +sum
    }

    console.log(order[i].Customer, sum); //ดูว่าCustomerใครเป็นคนซื้อ *เข้าถึงออฟเจ็กโดยใช้ . 
}