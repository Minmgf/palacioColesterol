export default function SectionHeaders({ subHeader, mainHeader }){
    return (
    <>
        <h3 className="leading-3 text-white uppercase font-lilitaOne">
            {subHeader}
        </h3>
        <h2 className="text-4xl italic font-lilitaOne text-primary">
            {mainHeader}
        </h2>
    </>
    )
}