import { FlexDiv } from "../styles/globalStyleComponent";
import { Button } from "./Button";
import { Input, Select } from "./Input";

export const CreateNewEvent = ()=>{

    // create minValue for minValue attribute of datetiem-local
    let today = new Date();
    let dd = String(today.getDate()).padStart(2,'0');
    let mm = String(today.getMonth() + 1).padStart(2,'0'); //January is 0!
    let yyyy = today.getFullYear();
    let todayDate = yyyy+'-'+mm+'-'+dd;
    
    return (
        <FlexDiv flex="1 1 auto" minHeight="100%" justifyContent="flex-start" gap="10px" padding="50px 10px">
            <FlexDiv flex="1 1 auto" flexDirection="column" className="create-new-event" gap="20px">
                <FlexDiv flex="0 0 auto" flexDirection="column" gap="10px">
                    <h3>Welcome to the Create Event Section. </h3>
                    <sub>please fillup all the required section.</sub>
                </FlexDiv>

                <form className="create-new-event__form">
                    <Input maxWidth="520px" alignSelf="flex-start" label="EVENT NAME" type="text" name="eventName" labelFor="eventName"/>
                    <Input maxWidth="520px" alignSelf="flex-start" label="EVENT ADDRESS" type="text" name="eventAddress" labelFor="eventAddress"/>
                    <FlexDiv flexWrap="wrap" gap="20px" maxWidth="520px">
                        <Input width="250px" alignSelf="flex-start" label="EVENT DATE (Start)" type="datetime-local" name="eventDate" labelFor="eventDate"
                            title="Start date should not be a past day and time."
                            required={true}
                            minValue={`${todayDate}T00:00`}
                        />
                        <Input width="250px" alignSelf="flex-start" label="EVENT DATE (End)" type="datetime-local" name="eventDate" labelFor="eventDate"
                            title="End date should be a future date and time."
                            required={true}
                            minValue={`${todayDate}T00:00`}
                        />
                    </FlexDiv>
                    
                    <Select maxWidth="520px" alignSelf="flex-start" label="EVENT TYPE" type="text" name="eventType" labelFor="eventType" 
                        options={[
                                    {value:'music',name:'Music'},
                                    {value:'pop',name:'Pop'},
                                    {value:'food',name:'Food'},
                                    {value:'foodNwine',name:'Food & Wine'},
                                    {value:'family',name:'Family'},
                                    {value:'festivals',name:'Festivals'},
                                    {value:'hiphop',name:'Hip Hop'},
                                    {value:'tribute',name:'Tribute'},
                                    {value:'rock',name:'Rock'}
                                ]}
                        defaultValue={'foodNwine'}
                        required={true}
                    />
                    <Input maxWidth="520px" alignSelf="flex-start" label="EVENT ORGANISER" type="text" name="eventOrganiser" labelFor="eventOrganiser"/>
                    <Button typeVariant="contained" typeColor="primary" maxWidth="519px"> CREATE EVENT</Button>
                </form>
            </FlexDiv>
            <FlexDiv flex="0 1 320px" flexDirection="column" className="created-events">
                see created event
            </FlexDiv>
        </FlexDiv>
    )
}