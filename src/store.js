import create from 'zustand'

export const useStore1=create((set)=>({
    menuList: [],
    id:'',
    mname:'',
    amount:'',
    count:0,
    Quantity:'',
}))