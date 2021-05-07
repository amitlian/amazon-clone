import React,{useState,useEffect} from 'react'
import {db} from '../firebase'
import {useStateValue} from '../StateProvider';
import Ordershow from '../Order/Ordershow'

function Order() {
    const [order, setOrder] = useState([]);
    const [{basket,user},dispatch] = useStateValue();
    useEffect(() => {
        if (user) {
            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .orderBy('created','desc')
            .onSnapshot(snapshot=>(
                setOrder(snapshot.docs.map(doc=>({
                    id:doc.id,
                    data:doc.data()
                })))
            ))
            
        } else {
            setOrder([])  
        }

    }, [user])
    return (
        <div className="orders">
            <h1>Your Orders</h1>
            <div className="orders_order">
                {order?.map(item=>(
                    <Ordershow items={item}/>
                ))}
            </div>

        </div>
    )
}

export default Order
