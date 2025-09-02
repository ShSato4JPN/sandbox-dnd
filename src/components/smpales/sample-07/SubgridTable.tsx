import React from 'react';

interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
  salary: number;
  experience: number;
  location: string;
}

const employeeData: Employee[] = [
  { id: 1, name: '田中太郎', position: 'シニアエンジニア', department: '開発', salary: 800000, experience: 5, location: '東京' },
  { id: 2, name: '佐藤花子', position: 'プロダクトマネージャー', department: '企画', salary: 750000, experience: 7, location: '大阪' },
  { id: 3, name: '鈴木一郎', position: 'ジュニアエンジニア', department: '開発', salary: 450000, experience: 2, location: '東京' },
  { id: 4, name: '高橋美咲', position: 'デザイナー', department: 'デザイン', salary: 600000, experience: 4, location: '福岡' },
  { id: 5, name: '山田健太', position: 'テックリード', department: '開発', salary: 900000, experience: 8, location: '東京' },
  { id: 6, name: '渡辺由美', position: 'マーケター', department: 'マーケティング', salary: 550000, experience: 3, location: '名古屋' },
];

const getDepartmentBadgeClass = (department: string) => {
  const baseClasses = "px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide";
  switch (department) {
    case '開発':
      return `${baseClasses} bg-green-100 text-green-800 border border-green-300`;
    case '企画':
      return `${baseClasses} bg-orange-100 text-orange-800 border border-orange-300`;
    case 'デザイン':
      return `${baseClasses} bg-purple-100 text-purple-800 border border-purple-300`;
    case 'マーケティング':
      return `${baseClasses} bg-blue-100 text-blue-800 border border-blue-300`;
    default:
      return `${baseClasses} bg-gray-100 text-gray-800 border border-gray-300`;
  }
};

const SubgridTable: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-8 font-sans">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Subgrid Table Sample
      </h1>
      
      <div className="bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="grid grid-cols-[60px_150px_180px_120px_120px_100px_100px] lg:grid-cols-[60px_150px_180px_120px_120px_100px_100px] md:grid-cols-[50px_130px_150px_100px_110px_90px_90px]">
          
          {/* Header */}
          <div className="col-span-full grid grid-cols-subgrid bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold">
            <div className="px-3 py-4 text-center border-r border-white/20 flex items-center justify-center text-sm">
              ID
            </div>
            <div className="px-3 py-4 text-center border-r border-white/20 flex items-center justify-center text-sm">
              名前
            </div>
            <div className="px-3 py-4 text-center border-r border-white/20 flex items-center justify-center text-sm">
              職位
            </div>
            <div className="px-3 py-4 text-center border-r border-white/20 flex items-center justify-center text-sm">
              部署
            </div>
            <div className="px-3 py-4 text-center border-r border-white/20 flex items-center justify-center text-sm">
              給与
            </div>
            <div className="px-3 py-4 text-center border-r border-white/20 flex items-center justify-center text-sm">
              経験年数
            </div>
            <div className="px-3 py-4 text-center flex items-center justify-center text-sm">
              勤務地
            </div>
          </div>

          {/* Body */}
          {employeeData.map((employee, index) => (
            <div 
              key={employee.id} 
              className={`col-span-full grid grid-cols-subgrid hover:bg-teal-50 hover:scale-[1.01] transition-all duration-300 hover:shadow-lg group ${
                index % 2 === 0 ? 'bg-white' : 'bg-slate-50'
              }`}
            >
              <div className="px-3 py-4 border-r border-slate-200 border-b border-slate-200 flex items-center justify-center text-sm text-gray-600">
                {employee.id}
              </div>
              <div className="px-3 py-4 border-r border-slate-200 border-b border-slate-200 flex items-center justify-center text-sm text-gray-800 font-medium">
                {employee.name}
              </div>
              <div className="px-3 py-4 border-r border-slate-200 border-b border-slate-200 flex items-center justify-center text-sm text-gray-600">
                {employee.position}
              </div>
              <div className="px-3 py-4 border-r border-slate-200 border-b border-slate-200 flex items-center justify-center">
                <span className={getDepartmentBadgeClass(employee.department)}>
                  {employee.department}
                </span>
              </div>
              <div className="px-3 py-4 border-r border-slate-200 border-b border-slate-200 flex items-center justify-center text-sm text-gray-800 font-mono">
                ¥{employee.salary.toLocaleString()}
              </div>
              <div className="px-3 py-4 border-r border-slate-200 border-b border-slate-200 flex items-center justify-center text-sm text-gray-600">
                {employee.experience}年
              </div>
              <div className="px-3 py-4 border-b border-slate-200 flex items-center justify-center text-sm text-gray-600">
                {employee.location}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile responsive version */}
      <div className="md:hidden mt-8">
        <div className="space-y-4">
          {employeeData.map((employee) => (
            <div key={employee.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4">
                <h3 className="font-semibold text-lg">{employee.name}</h3>
                <p className="text-indigo-100 text-sm">{employee.position}</p>
              </div>
              <div className="p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">ID:</span>
                  <span className="text-gray-800">{employee.id}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">部署:</span>
                  <span className={getDepartmentBadgeClass(employee.department)}>
                    {employee.department}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">給与:</span>
                  <span className="text-gray-800 font-mono">¥{employee.salary.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">経験年数:</span>
                  <span className="text-gray-800">{employee.experience}年</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">勤務地:</span>
                  <span className="text-gray-800">{employee.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubgridTable;