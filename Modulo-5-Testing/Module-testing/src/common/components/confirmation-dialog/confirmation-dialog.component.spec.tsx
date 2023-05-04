import React from 'react';
import { fireEvent, render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';

describe('Confirmation Dialog Component specs', () => {
  it('should render without errors', () => {

    //Arrange

    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Confirmation Dialog',
      labels: {
        closeButton: 'Close',
        acceptButton: 'Accept',
      },
      children: <p>Are you sure you want to proceed?</p>,
    };

    //Act

    render(<ConfirmationDialogComponent {...props}/>);

    //Assert

    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByText(props.labels.closeButton)).toBeInTheDocument();
    expect(screen.getByText(props.labels.acceptButton)).toBeInTheDocument();
  });

  it('should call onClose when close button is clicked', async () => {
    //Arrange
    const props = {
      isOpen: true,
      onAccept:jest.fn(),
      onClose: jest.fn(),
      title: 'Confirmation Dialog',
      labels: {
        closeButton: 'Close',
        acceptButton: 'Accept',
      },
      children: <p>Are you sure you want to proceed?</p>,
    };

    //Act
    render(<ConfirmationDialogComponent {...props} />);
    fireEvent.click(screen.queryByRole('button', {name: props.labels.closeButton}));

    // Wait for the dialog to close before checking assertions
    expect(screen.queryByRole('button', {name: props.labels.closeButton})).toBeInTheDocument();

    //Assert
    expect(props.onClose).toHaveBeenCalled();
  });

  it('should call onAccept when close button is clicked', async () => {
    //Arrange
    const props = {
      isOpen: true,
      onAccept:jest.fn(),
      onClose: jest.fn(),
      title: 'Confirmation Dialog',
      labels: {
        closeButton: 'Close',
        acceptButton: 'Accept',
      },
      children: <p>Are you sure you want to proceed?</p>,
    };

    //Act
    render(<ConfirmationDialogComponent {...props} />);
    fireEvent.click(screen.queryByRole('button', {name: props.labels.acceptButton}));

    // Wait for the dialog to close before checking assertions
    expect(screen.queryByRole('button', {name: props.labels.acceptButton})).toBeInTheDocument();

    //Assert
    expect(props.onClose).toHaveBeenCalled();
  });
});
