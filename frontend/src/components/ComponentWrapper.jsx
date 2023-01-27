import { useSelector } from "react-redux";
import Alert from "./Alert";

export default function ComponentWrapper(){
    const alert = useSelector(s => s.alert);
    return <>
        {alert.show && (
            <>
                <Alert type={alert.type}>
                    {alert.msg}
                </Alert>
            </>
        )}
    </>
}