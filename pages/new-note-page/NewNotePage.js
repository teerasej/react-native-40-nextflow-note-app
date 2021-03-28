import { Body, Header, Button, Container, Content, Input, Item, Label, Title } from 'native-base'
import React from 'react'
import { View, Text } from 'react-native'
import * as yup from 'yup'
import { Field, Formik } from "formik";
import { useDispatch } from 'react-redux';
import actions from '../../redux/actions';

export default function NewNotePage({ navigation }) {

    const dispatch = useDispatch();

    const validationSchema = yup.object({
        message: yup.string()
            .required('Please fill something')
            .min(3, 'fill something more...')
    })


    return (
        <Container>
            <Content padder>
                <Formik
                    initialValues={{
                        message: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { resetForm  }) => {
                        console.log(values)
                        resetForm()
                        dispatch({
                            type: actions.SAVE_NEW_NOTE,
                            payload: values.message
                        })
                        navigation.goBack()
                    }}
                >
                    {
                        ({ handleChange, handleBlur, handleSubmit, values, errors }) => {
                            return (
                                <View>
                                    <Item stackedLabel >
                                        <Label>Message: </Label>
                                        <Field
                                            id="message"
                                            name="message"
                                            component={Input}
                                            value={values.message || ''}
                                            onChangeText={handleChange('message')}
                                            onBlur={handleBlur('message')}
                                        />
                                        {Boolean(errors.message) ?
                                            (<Text>{errors.message}</Text>) : null
                                        }
                                    </Item>
                                    <Button
                                        block
                                        primary
                                        onPress={handleSubmit}
                                    >
                                        <Text>Save</Text>
                                    </Button>
                                </View>
                            )
                        }
                    }
                </Formik>
            </Content>
        </Container>
    )
}
