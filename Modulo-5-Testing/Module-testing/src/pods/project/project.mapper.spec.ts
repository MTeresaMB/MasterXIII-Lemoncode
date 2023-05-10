import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';
import { mapProjectFromApiToVm } from './project.mapper';

describe('project mapper specs', () => {
  it('should work correctly when it feeds an employee from API', () => {
    //Arrange

    const employeeSummaryFromApi: apiModel.EmployeeSummary = {
      id: '1',
      employeeName: 'John Doe',
      isAssigned: true,
    };

    //Act

    const result = {
      id: employeeSummaryFromApi.id,
      employeeName: employeeSummaryFromApi.employeeName,
      isAssigned: employeeSummaryFromApi.isAssigned,
    };

    //Assert

    expect(result).toEqual({
      id: '1',
      employeeName: 'John Doe',
      isAssigned: true,
    });
  });

  it('should return empty project if project is falsy', () => {

    //Arrange

    const project: apiModel.Project = null;
    const expectedResults: viewModel.Project = {
      id: '',
      name: '',
      externalId: '',
      comments: '',
      isActive: false,
      employees: []
    };

    //Act

    const results = mapProjectFromApiToVm(project);

    //Assert

    expect(results).toEqual(expectedResults);
  });

  it('should work correctly when it feed project from api', () => {

    //Arrange

    const projectFromApi: apiModel.Project = {
      id: '1',
      name: 'Project X',
      isActive: true,
      comments: 'Comments',
      externalId: 'xxxx',
      employees: [
        {
          id: '1',
          employeeName: 'John Doe',
          isAssigned: true,
        }
      ]
    };

    //Act

    const result: viewModel.Project = mapProjectFromApiToVm(projectFromApi);

    //Assert

    expect(result).toEqual(projectFromApi);
    expect(Array.isArray(result.employees)).toBeTruthy();
  });
it('should return empty employees array if project employees is null or undefined', () => {
    // Arrange
    const projectFromApi: apiModel.Project = {
      id: '1',
      name: 'Project X',
      isActive: true,
      comments: 'Comments',
      externalId: 'xxxx',
      employees: null,
    };
    const expectedResults: viewModel.Project = {
      id: '1',
      name: 'Project X',
      isActive: true,
      comments: 'Comments',
      externalId: 'xxxx',
      employees: [],
    };

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(projectFromApi);

    // Assert
    expect(result).toEqual(expectedResults);
    expect(Array.isArray(result.employees)).toBeTruthy();
  });
})
