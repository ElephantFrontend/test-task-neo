import css from "./Datepicker.module.css"
import {useField} from "formik";
import DatePicker from "react-datepicker";

function Datepicker ({ name = "", placeholder }) {
    const [field, meta, helpers] = useField(name);
    const { value } = meta;
    const { setValue } = helpers;

    return (
        <DatePicker
            {...field}
            selected={value}
            placeholderText={placeholder}
            className={css['datepicker']}
            onChange={(date) => setValue(date)}
        />
    );
}

export default Datepicker
