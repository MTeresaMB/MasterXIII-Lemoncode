import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';
import { mapProjectFromApiToVm } from './project.mapper';

describe('project mapper specs', () => {
  it('should work correctly when it feeds an employee from API', () => {
    //Arrange
    const projectFromApi: apiModel.Project = {
      id: '1',
      name: 'Test Project',
      employees: [
        {
          id: '1',
          employeeName: 'John Doe',
          isAssigned: true,
        },
        {
          id: '2',
          employeeName: 'Jane Smith',
          isAssigned: false,
        },
      ],
      isActive: false
    };
    //Act
    const result = mapProjectFromApiToVm(projectFromApi);

    //Assert
    expect(result).toEqual({
      id: '1',
      name: 'Test Project',
      isActive: false,
      employees: [
        {
          id: '1',
          employeeName: 'John Doe',
          isAssigned: true,
        },
        {
          id: '2',
          employeeName: 'Jane Smith',
          isAssigned: false,
        },
      ],
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
    const nullEmployeesApiProject: apiModel.Project = {
      id: '1',
      name: 'Project X',
      isActive: true,
      comments: 'Comments',
      externalId: 'xxxx',
      employees: null,
    };
    const undefinedEmployeesApiProject: apiModel.Project = {
      id: '1',
      name: 'Project X',
      isActive: true,
      comments: 'Comments',
      externalId: 'xxxx',
      employees: undefined,
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
    const nullEmployeesResult: viewModel.Project = mapProjectFromApiToVm(nullEmployeesApiProject);
    const undefinedEmployeesResult: viewModel.Project = mapProjectFromApiToVm(undefinedEmployeesApiProject);

    // Assert
    expect(nullEmployeesResult).toEqual(expectedResults);
    expect(undefinedEmployeesResult).toEqual(expectedResults);
    expect(Array.isArray(nullEmployeesResult.employees)).toBeTruthy();
    expect(Array.isArray(undefinedEmployeesResult.employees)).toBeTruthy();
  });
})
