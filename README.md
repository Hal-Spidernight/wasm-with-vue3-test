## 前提
* Node18以上がインストールされていること
* Cargoが実行できること

## 実行手順

Rust/Wasm側
```
cd rust-wasm
cargo install wasm-pack
wasm-pack build --target web
cd ..
mv ./rust-wasm/pkg ./vue-wasm-app
```

Vue側
```
cd vue-wasm-app
yarn install or npm i
yarn dev or npm run dev
```