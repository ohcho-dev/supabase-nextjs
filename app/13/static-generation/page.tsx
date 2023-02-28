import supabase from "@/utils/supabase"
import "server-only";

async function getData() {
    const { data } = await supabase.from('parks').select();

    return { data };
}

export default async function SSG() {
    const { data } = await getData();
    return <pre>{JSON.stringify(data, null, 2)}</pre>
}