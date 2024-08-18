import init, { greet, add } from "../wasm/rust_wasm"

export default async () => {
    //wasmの初期化
    await init()

    return {
        greet,
        add
    }
}