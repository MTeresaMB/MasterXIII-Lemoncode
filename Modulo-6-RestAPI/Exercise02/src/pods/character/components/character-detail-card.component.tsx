import React from 'react';
import { Button, Card, CardActions, CardContent} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { Form, Formik } from 'formik';
import { formValidation } from '../character.validations';
import { TextFieldComponent } from 'common/components';
import * as classes from '../character.styles';
import { Character } from '../character.vm';

interface Props {
  character: Character;
  onSaveSentence: (character: Character) => void;
}

export const CharacterDetailCard: React.FC<Props> = (props: Props) => {
  const { character, onSaveSentence } = props;
  const navigate = useNavigate();
  const handleBackNavigation = () =>{
    return navigate(linkRoutes.characterCollection)
  }

  return (
    <Card>
      <CardContent>
        <Formik onSubmit={onSaveSentence} initialValues={character} enableReinitialize={true} validate={formValidation.validateForm}>
          {() => (
            <Form className={classes.root}>
              <TextFieldComponent disabled={true} name='name' label='Name' />
              <TextFieldComponent disabled={true} name='status' label='Status'/>
              <TextFieldComponent disabled={true} name='species' label='Species'/>
              <TextFieldComponent disabled={true} name='gender' label='Gemder'/>
              <TextFieldComponent disabled={true} name='origin.name' label='Origin'/>
              <TextFieldComponent disabled={true} name='location.name' label='Location'/>
              <TextFieldComponent name='bestSentences' label='Best Sentences'/>
              <Button type='submit' variant='contained' color='primary'>Save</Button>
            </Form>
          )}
        </Formik>
      </CardContent>
      <CardActions>
        <Button variant="contained" onClick={handleBackNavigation}>Back</Button>
      </CardActions>
    </Card>
  )
}