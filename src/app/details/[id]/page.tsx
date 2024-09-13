import EventInfo from "@/app/components/EventInfo";
function DetailPage(props: any) {
    const id = props.params.id;
    return ( <div>
        <EventInfo />
           
       

    </div> );
}

export default DetailPage;