import { AppDispatch, RootState } from '@/store/index';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '@/store/counterSlice';
import { fetchCount } from '@/store/counterSliceAsync';
import { Flex, Button } from 'antd';
const About:React.FC = () => {
    const count = useSelector((state: RootState) => state.counter.count)
    const { asyncCount, status } = useSelector((state:RootState) => state.asyncCounter)
    const dispatch = useDispatch<AppDispatch>() // 添加泛型类型标注
    const handleAdd = () => {
        dispatch(increment())
    }
    const handleDown = () => {
        dispatch(decrement())
    }

    const handleAsyncAdd = async () => {
        const params: any = { 
            status: 'add',
            value: asyncCount
        }
        try {
            await dispatch(fetchCount(params))
            // 可在此处理异步结果
        } catch (error) {
            console.error('Async add failed:', error)
        }
    }
    const handleAsyncDown = async () => {
        const params: any = { 
            status: 'down',
            value: asyncCount
        }
        try {
            await dispatch(fetchCount(params))
            // 可在此处理异步结果
        } catch (error) {
            console.error('Async down failed:', error)
        }
    }
    return (
        <div>
            <h1>Count:{count}</h1>
            <Flex gap="small" wrap>
                <Button onClick={()=>{handleAdd()}} type="primary">Count ++</Button>
                <Button onClick={()=>{handleDown()}}>Count --</Button>
            </Flex>
            <h1>asyncCount:{asyncCount} {status}</h1>
            <Flex gap="small" wrap>
                <Button onClick={()=>{handleAsyncAdd()}} type="primary">Count ++</Button>
                <Button onClick={()=>{handleAsyncDown()}}>Count --</Button>
            </Flex>
        </div>
    )
}
export default About