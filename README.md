# Tenycircle-instances
Tenycircle.jsの拡張機能 第一弾Tenycircle-instances沢山のインスタンスを提供します
## メソッドについて
### `$.instances.judgement`
値を判定するインスタンス

インスタンスだがnewなくてもいい
#### `judgment.number`
値が数字かを返す
#### `judgment.string`
値が文字列かを返す
#### `judgment.object`
値がobjectかを返す
#### `judgment.function`
値が関数かを返す
#### `judgment.array`
値が配列かを返す
#### `judgment.boolean`
値が真偽値かを返す
#### `judgment.undefined`
値がundefinedかを返す
#### `judgment.null`
値がnullかを返す
#### `judgment.infinity`
値がinfinityかを返す
### `$.instances.counter`
カウンターのインスタンス

引数には初期値を設定する
#### `counter.increment`
カウンターに引数を足し、カウンターを返す(デフォルトでは1)
#### `counter.decrement`
カウンターに引数を引き、カウンターを返す(デフォルトでは1)
#### `counter.set`
カウンターを引数にセットし、カウンターを返す(デフォルトでは0)
#### `counter.get`
カウンターを返す
### `$.instances.element`
引数のタグ名を生成し、その内容をセットしたりするインスタンス
#### `element.sethtml`
innerHTMLをセットする
#### `element.gethtml`
innerHTMLをゲットする
#### `element.get`
現在の要素をゲットする