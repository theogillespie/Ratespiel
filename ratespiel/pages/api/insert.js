import { connectDb } from "../../lib/db"
//not rly needed but ill expose it wtf
export default async function handler(req, res) {
    var id = await connectDb().insertSet(JSON.parse(req.body));
    console.log("db inserted, assigned id is: " + id._id);
    res.status(200).json({object: id});
}