import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
// Slot
// 親から子へ props を受け渡しつつ、子のタグや構造をそのまま使う
// ラップしているけど、タグを変えたい・propsを渡したい、という時に使用
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"


// class-variance-authority ライブラリの cva 関数を使って定義された、
// ボタンのスタイルバリエーションを管理するためのユーティリティ
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

// ボタン用関数
// 引数{ }で分割代入の表示, ...propsで他引数に展開して代入
// ":" で型注釈
// 型注釈以降は "&" で型の合成
// React.ComponentProps<"button">
// ↑HTMLのbutton要素が持つすべてのprops（onClick, disabled, childrenなど
// VariantProps<typeof buttonVariants>
// ↑ buttonVariantsで定義したvariantやsizeなどのprops
// VariantProps は cva で作った型を受け取るために使う
// {asChild?: boolean}
// asChildという独自のprops
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}:React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean}){
    // ? は三項演算子
    // asChild　はtrueならSlotを代入。falseなら"button"を代入。
    const Comp = asChild ? Slot : "button"

    return (
      <Comp
        data-slot="button"
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
  )
}


export { Button, buttonVariants }
