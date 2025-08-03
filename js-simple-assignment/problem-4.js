/** Problem 04 - (Delete / Store) */
var fileName= "docx.xpdf";
//write your code here

if(fileName.slice(0,1)==='#'||fileName.slice(-4)==='.pdf'||fileName.slice(-5)==='.docx')
{
    console.log('Store');
}
else
{
    console.log('Delete');
}