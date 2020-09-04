interface FormErrors<T> {
    [key: keyof T]: ValidationValueMessage
}