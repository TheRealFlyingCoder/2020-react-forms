export default interface FormElement {
    label: string,
    formKey: string,
    register?: () => Ref,
    error?: string
};