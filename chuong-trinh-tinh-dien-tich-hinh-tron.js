//khai báo biến
let r;
let d;
let C;
let S;
const pi=3.14;
// gán giá trị người dùng nhập vào biến
r=prompt("nhập kích thước bán kính đường tròn");
/* xử lý
- tính đường kính đường tròn
- tính chu vi đường tròn
- diện tích hình tròn
*/
d = 2*r;
C = 2*pi*r;
S =r**2*pi;
// out put
document.write("Đường kính đường tròn là: "+d);
document.write("<br>");
document.write("Chu vi đường tròn là: "+C);
document.write("<br>");
document.write("Diện tích hình tròn là: "+S);