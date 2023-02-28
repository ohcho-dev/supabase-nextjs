import supabase from "@/utils/supabase"
import "server-only";

export const revalidate = 10;

async function getData() {
    const { data } = await supabase.from('parks').select();

    return { data };
}

export default async function ISG() {
    const { data } = await getData();
    return <pre>{JSON.stringify(data, null, 2)}</pre>
}