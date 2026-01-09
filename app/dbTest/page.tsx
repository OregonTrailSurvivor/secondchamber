import prisma from "@/lib/prisma"

export default async function dbTest(){
   
    const productList = await prisma.products.findMany()
    
    
return (
    <div>{productList.map((item) => {return(<div key={item.id}>{item.name}</div>)})}</div>
)

}