import EventInfo from "@/app/components/EventInfo";
function DetailPage(props: any) {

    const id = props.params.id;
    return ( <div>
        <EventInfo data={{
            time: {
                startTime: 1726303309339,
            endTime: 1726303409339,
            },
            location: {
                address: 'Thành Phố Thủ Đức, Hồ Chí Minh',
                name: "FPT University HCMC"
            }
        }} />
           
       

    </div> );
}

export default DetailPage;