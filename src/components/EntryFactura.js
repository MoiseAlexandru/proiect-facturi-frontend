import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';


export default function EntryFactura({numarFactura, numeClient, dataFacturare}) {
    
    const parsedDate = new Date(dataFacturare);

    return (
        <div className = "entryFactura">
            <span className="elementEntryFactura"> {numarFactura} </span>
            <span className="elementEntryFactura"> {numeClient} </span>
            <span className="elementEntryFactura"> {format(parsedDate, 'dd MMM yyyy HH:mm', {locale: enUS})} </span>
        </div>
    );
}